import { registerPlugin } from '@capacitor/core';
const FaceDetection = registerPlugin('FaceDetection', {
    web: () => import('./web').then(m => new m.FaceDetectionWeb()),
});
export * from './definitions';
export { FaceDetection };
//# sourceMappingURL=index.js.map