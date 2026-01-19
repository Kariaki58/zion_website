'use server';

/**
 * @fileOverview A flow that allows users to upload a photo of themselves and visualize
 * them wearing different clothing items from the store's catalog.
 *
 * - visualizeOutfit - A function that handles the outfit visualization process.
 * - VisualizeOutfitInput - The input type for the visualizeOutfit function.
 * - VisualizeOutfitOutput - The return type for the visualizeOutfit function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import * as fs from 'fs';
import { Readable } from 'stream';

const VisualizeOutfitInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo of the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // keep this as a single line.
    ),
  clothingItemDescription: z
    .string()
    .describe('The description of the clothing item to visualize on the user.'),
});
export type VisualizeOutfitInput = z.infer<typeof VisualizeOutfitInputSchema>;

const VisualizeOutfitOutputSchema = z.object({
  visualizedOutfitDataUri: z
    .string()
    .describe(
      'A data URI containing the image of the user wearing the visualized outfit.'
    ),
});
export type VisualizeOutfitOutput = z.infer<typeof VisualizeOutfitOutputSchema>;

export async function visualizeOutfit(input: VisualizeOutfitInput): Promise<VisualizeOutfitOutput> {
  return visualizeOutfitFlow(input);
}

const visualizeOutfitFlow = ai.defineFlow(
  {
    name: 'visualizeOutfitFlow',
    inputSchema: VisualizeOutfitInputSchema,
    outputSchema: VisualizeOutfitOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.5-flash-image-preview',
      prompt: [
        {media: {url: input.photoDataUri}},
        {text: `Generate an image of this person wearing: ${input.clothingItemDescription}`},
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
      },
    });

    if (!media) {
      throw new Error('No image was generated.');
    }

    return {
      visualizedOutfitDataUri: media.url,
    };
  }
);
