import { WebPlugin } from '@capacitor/core';
import type { FaceDetectionPlugin, ProcessImageOptions, ProcessImageResult } from './definitions';
export declare class FaceDetectionWeb extends WebPlugin implements FaceDetectionPlugin {
    processImage(_options: ProcessImageOptions): Promise<ProcessImageResult>;
    private createUnavailableException;
}
