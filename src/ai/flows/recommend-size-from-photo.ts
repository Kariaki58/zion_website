'use server';

/**
 * @fileOverview An AI agent that recommends clothing sizes based on a user-uploaded photo.
 *
 * - recommendSizeFromPhoto - A function that handles the size recommendation process.
 * - RecommendSizeFromPhotoInput - The input type for the recommendSizeFromPhoto function.
 * - RecommendSizeFromPhotoOutput - The return type for the recommendSizeFromPhoto function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendSizeFromPhotoInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo of the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // keep the backslashes, they are needed to escape the single quote character
    ),
  clothingItem: z.string().describe('The name of the clothing item.'),
});

export type RecommendSizeFromPhotoInput = z.infer<
  typeof RecommendSizeFromPhotoInputSchema
>;

const RecommendSizeFromPhotoOutputSchema = z.object({
  recommendedSize: z.string().describe('The recommended size for the clothing item.'),
  confidenceLevel: z
    .number()
    .describe('The confidence level (0-1) for the size recommendation.'),
});

export type RecommendSizeFromPhotoOutput = z.infer<
  typeof RecommendSizeFromPhotoOutputSchema
>;

export async function recommendSizeFromPhoto(
  input: RecommendSizeFromPhotoInput
): Promise<RecommendSizeFromPhotoOutput> {
  return recommendSizeFromPhotoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendSizeFromPhotoPrompt',
  input: {schema: RecommendSizeFromPhotoInputSchema},
  output: {schema: RecommendSizeFromPhotoOutputSchema},
  prompt: `You are a personal shopping assistant that helps users find the right clothing size.

  Analyze the user's photo and recommend the best size for the following clothing item:
  {{clothingItem}}

  Consider the user's apparent body shape and size in the photo: {{media url=photoDataUri}}

  Return the recommended size and your confidence level (0-1) for the recommendation.
  Format:
  {
  \"recommendedSize\": \"string\",
  \"confidenceLevel\": number
  }`,
});

const recommendSizeFromPhotoFlow = ai.defineFlow(
  {
    name: 'recommendSizeFromPhotoFlow',
    inputSchema: RecommendSizeFromPhotoInputSchema,
    outputSchema: RecommendSizeFromPhotoOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
