import { CapacitorException, ExceptionCode, WebPlugin } from '@capacitor/core';
export class FaceDetectionWeb extends WebPlugin {
    async processImage(_options) {
        throw this.createUnavailableException();
    }
    createUnavailableException() {
        return new CapacitorException('This Face Detection plugin method is not available on this platform.', ExceptionCode.Unavailable);
    }
}
//# sourceMappingURL=web.js.map