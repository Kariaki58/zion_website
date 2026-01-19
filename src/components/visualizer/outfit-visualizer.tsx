'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { recommendSizeFromPhoto } from '@/ai/flows/recommend-size-from-photo';
import { visualizeOutfit } from '@/ai/flows/visualize-outfit';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { UploadCloud, X, Bot, Shirt, Ruler, Loader2 } from 'lucide-react';
import { clothingItemsForVisualizer } from '@/lib/mock-data';
import { Skeleton } from '../ui/skeleton';

const formSchema = z.object({
  clothingItemSlug: z.string().min(1, 'Please select a clothing item.'),
});

type FormValues = z.infer<typeof formSchema>;

export function OutfitVisualizer() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [visualizedImageUrl, setVisualizedImageUrl] = useState<string | null>(null);
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<false | 'visualize' | 'recommend'>(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
      setVisualizedImageUrl(null);
      setRecommendedSize(null);
    }
  };

  const removeImage = () => {
    setFile(null);
    setPreviewUrl(null);
    setVisualizedImageUrl(null);
    setRecommendedSize(null);
  }

  const fileToDataUri = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const onSubmit = async (data: FormValues, action: 'visualize' | 'recommend') => {
    if (!file) {
      toast({
        variant: 'destructive',
        title: 'No Photo',
        description: 'Please upload a photo of yourself first.',
      });
      return;
    }

    setIsLoading(action);
    setVisualizedImageUrl(null);
    setRecommendedSize(null);

    try {
      const photoDataUri = await fileToDataUri(file);
      const clothingItem = clothingItemsForVisualizer.find(item => item.value === data.clothingItemSlug);
      
      if (!clothingItem) {
          throw new Error('Selected clothing item not found.');
      }

      if (action === 'visualize') {
        const result = await visualizeOutfit({
          photoDataUri,
          clothingItemDescription: `A person wearing a ${clothingItem.label}`,
        });
        setVisualizedImageUrl(result.visualizedOutfitDataUri);
        toast({ title: 'Outfit Visualized!', description: "Here's how it could look on you." });
      } else if (action === 'recommend') {
        const result = await recommendSizeFromPhoto({
          photoDataUri,
          clothingItem: clothingItem.label,
        });
        setRecommendedSize(result.recommendedSize);
        toast({ title: 'Size Recommended!', description: `We suggest size ${result.recommendedSize}.` });
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'AI Error',
        description: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit">
            <Bot className="h-8 w-8" />
        </div>
        <CardTitle className="font-headline text-3xl mt-4">AI Outfit Visualizer</CardTitle>
        <CardDescription>
          Upload a photo of yourself and select an item to see how it looks or get a size recommendation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">1. Upload Your Photo</Label>
              <div className="relative aspect-square w-full bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                {previewUrl ? (
                  <>
                    <Image src={previewUrl} alt="Preview" fill className="object-cover rounded-lg" />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8 rounded-full"
                      onClick={removeImage}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </>
                ) : (
                  <div className="text-center p-8 space-y-2 text-muted-foreground">
                    <UploadCloud className="h-10 w-10 mx-auto"/>
                    <p>Drag & drop or click to upload</p>
                    <Input id="picture" type="file" className="sr-only" onChange={handleFileChange} accept="image/*" />
                    <Label htmlFor="picture" className="text-primary cursor-pointer hover:underline">Choose a file</Label>
                  </div>
                )}
              </div>
            </div>
            
            <form>
                <div className="grid w-full items-center gap-1.5">
                    <Label>2. Select Clothing Item</Label>
                    <Controller
                        control={form.control}
                        name="clothingItemSlug"
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger>
                                <SelectValue placeholder="Choose an item..." />
                            </SelectTrigger>
                            <SelectContent>
                                {clothingItemsForVisualizer.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                    {item.label}
                                </SelectItem>
                                ))}
                            </SelectContent>
                            </Select>
                        )}
                    />
                    {form.formState.errors.clothingItemSlug && <p className="text-sm font-medium text-destructive">{form.formState.errors.clothingItemSlug.message}</p>}
                </div>
            </form>
            <div className="space-y-2 pt-2">
                <Button onClick={form.handleSubmit((data) => onSubmit(data, 'visualize'))} disabled={!!isLoading} className="w-full bg-primary hover:bg-primary/90">
                    {isLoading === 'visualize' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Shirt className="mr-2 h-4 w-4" />}
                    Visualize Outfit
                </Button>
                <Button onClick={form.handleSubmit((data) => onSubmit(data, 'recommend'))} disabled={!!isLoading} className="w-full" variant="secondary">
                    {isLoading === 'recommend' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Ruler className="mr-2 h-4 w-4" />}
                    Get Size Recommendation
                </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <Label>3. View AI Result</Label>
            <div className="relative aspect-square w-full bg-muted rounded-lg border border-border flex items-center justify-center overflow-hidden">
                {isLoading && <Skeleton className="w-full h-full" />}
                {!isLoading && visualizedImageUrl && <Image src={visualizedImageUrl} alt="Visualized outfit" fill className="object-cover" />}
                {!isLoading && recommendedSize && (
                    <div className="text-center p-8">
                        <p className="text-lg text-muted-foreground">Our AI Recommends:</p>
                        <p className="font-headline text-6xl font-bold text-primary mt-2">{recommendedSize}</p>
                    </div>
                )}
                {!isLoading && !visualizedImageUrl && !recommendedSize && (
                    <div className="text-center p-8 space-y-2 text-muted-foreground">
                        <Bot className="h-10 w-10 mx-auto" />
                        <p>Your AI generated result will appear here.</p>
                    </div>
                )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
