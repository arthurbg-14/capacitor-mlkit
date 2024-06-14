/**
 * Defines options to control accuracy / speed trade-offs in performing face detection.
 * In general, choosing the more accurate mode will generally result in longer runtime, whereas choosing the faster mode will generally result in detecting fewer faces.
 *
 * @since 5.1.0
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions.PerformanceMode
 */
export var PerformanceMode;
(function (PerformanceMode) {
    /**
     * Indicates a preference for speed in the options that may make an accuracy vs. speed trade-off.
     * This will tend to detect fewer faces and may be less precise in determining values such as position, but will run faster.
     *
     * @since 5.1.0
     * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions#PERFORMANCE_MODE_FAST
     */
    PerformanceMode[PerformanceMode["Fast"] = 1] = "Fast";
    /**
     * Indicates a preference for accuracy in the options that may make an accuracy vs. speed trade-off.
     * This will tend to detect more faces and may be more precise in determining values such as position, at the cost of speed.
     *
     * @since 5.1.0
     * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions#public-static-final-int-performance_mode_accurate
     */
    PerformanceMode[PerformanceMode["Accurate"] = 2] = "Accurate";
})(PerformanceMode || (PerformanceMode = {}));
/**
 * Defines options to enable face landmarks or not.
 * Processing time increases as the extra face landmark to search.
 *
 * @since 5.1.0
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions.LandmarkMode
 */
export var LandmarkMode;
(function (LandmarkMode) {
    /**
     * Does not perform landmark detection.
     *
     * @since 5.1.0
     * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions#public-static-final-int-landmark_mode_none
     */
    LandmarkMode[LandmarkMode["None"] = 1] = "None";
    /**
     * Detects FaceLandmark for a given face.
     *
     * @since 5.1.0
     * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions#public-static-final-int-landmark_mode_all
     */
    LandmarkMode[LandmarkMode["All"] = 2] = "All";
})(LandmarkMode || (LandmarkMode = {}));
/**
 * Defines options to enable face contours or not.
 * Processing time increases as the number of contours to search.
 *
 * @since 5.1.0
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions.ContourMode
 */
export var ContourMode;
(function (ContourMode) {
    /**
     * Does not perform contour detection.
     *
     * @since 5.1.0
     * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions#public-static-final-int-contour_mode_none
     */
    ContourMode[ContourMode["None"] = 1] = "None";
    /**
     * Detects FaceContour for a given face.
     * Note that it would return contours for up to 5 faces
     *
     * @since 5.1.0
     * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions#public-static-final-int-contour_mode_all
     */
    ContourMode[ContourMode["All"] = 2] = "All";
})(ContourMode || (ContourMode = {}));
/**
 * Defines options for characterizing attributes such as "smiling" and "eyes open".
 * Processing time increases as extra classification to search.
 *
 * @since 5.1.0
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions.ClassificationMode
 */
export var ClassificationMode;
(function (ClassificationMode) {
    /**
     * Does not perform classification.
     *
     * @since 5.1.0
     * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions#public-static-final-int-classification_mode_none
     */
    ClassificationMode[ClassificationMode["None"] = 1] = "None";
    /**
     * Performs "eyes open" and "smiling" classification.
     *
     * @since 5.1.0
     * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceDetectorOptions#public-static-final-int-classification_mode_all
     */
    ClassificationMode[ClassificationMode["All"] = 2] = "All";
})(ClassificationMode || (ClassificationMode = {}));
/**
 * Landmark types for face.
 *
 * @since 5.1.0
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceLandmark.LandmarkType
 */
export var LandmarkType;
(function (LandmarkType) {
    /**
     * The center of the subject's bottom lip.
     *
     * @since 5.1.0
     */
    LandmarkType[LandmarkType["MouthBottom"] = 0] = "MouthBottom";
    /**
     * The midpoint between the subject's left mouth corner and the outer corner of the subject's left eye.
     * For full profile faces, this becomes the centroid of the nose base, nose tip, left ear lobe and left ear tip.
     *
     * @since 5.1.0
     */
    LandmarkType[LandmarkType["LeftCheek"] = 1] = "LeftCheek";
    /**
     * The midpoint of the subject's left ear tip and left ear lobe.
     *
     * @since 5.1.0
     */
    LandmarkType[LandmarkType["LeftEar"] = 3] = "LeftEar";
    /**
     * The center of the subject's left eye cavity.
     *
     * @since 5.1.0
     */
    LandmarkType[LandmarkType["LeftEye"] = 4] = "LeftEye";
    /**
     * The subject's left mouth corner where the lips meet.
     *
     * @since 5.1.0
     */
    LandmarkType[LandmarkType["MouthLeft"] = 5] = "MouthLeft";
    /**
     * The midpoint between the subject's nostrils where the nose meets the face.
     *
     * @since 5.1.0
     */
    LandmarkType[LandmarkType["NoseBase"] = 6] = "NoseBase";
    /**
     * The midpoint between the subject's right mouth corner and the outer corner of the subject's right eye.
     * For full profile faces, this becomes the centroid of the nose base, nose tip, right ear lobe and right ear tip.
     *
     * @since 5.1.0
     */
    LandmarkType[LandmarkType["RightCheek"] = 7] = "RightCheek";
    /**
     * The midpoint of the subject's right ear tip and right ear lobe.
     *
     * @since 5.1.0
     */
    LandmarkType[LandmarkType["RightEar"] = 9] = "RightEar";
    /**
     * The center of the subject's right eye cavity.
     *
     * @since 5.1.0
     */
    LandmarkType[LandmarkType["RightEye"] = 10] = "RightEye";
    /**
     * The subject's right mouth corner where the lips meet.
     *
     * @since 5.1.0
     */
    LandmarkType[LandmarkType["MouthRight"] = 11] = "MouthRight";
})(LandmarkType || (LandmarkType = {}));
/**
 * Contour types for face.
 *
 * @since 5.1.0
 * @see https://developers.google.com/android/reference/com/google/mlkit/vision/face/FaceContour.ContourType
 */
export var ContourType;
(function (ContourType) {
    /**
     * The outline of the subject's face.
     *
     * @since 5.1.0
     */
    ContourType[ContourType["Face"] = 1] = "Face";
    /**
     * The top outline of the subject's left eyebrow.
     *
     * @since 5.1.0
     */
    ContourType[ContourType["LeftEyebrowTop"] = 2] = "LeftEyebrowTop";
    /**
     * The bottom outline of the subject's left eyebrow.
     *
     * @since 5.1.0
     */
    ContourType[ContourType["LeftEyebrowBottom"] = 3] = "LeftEyebrowBottom";
    /**
     * The top outline of the subject's right eyebrow.
     *
     * @since 5.1.0
     */
    ContourType[ContourType["RightEyebrowTop"] = 4] = "RightEyebrowTop";
    /**
     * The bottom outline of the subject's right eyebrow.
     *
     * @since 5.1.0
     */
    ContourType[ContourType["RightEyebrowBottom"] = 5] = "RightEyebrowBottom";
    /**
     * The outline of the subject's left eye cavity.
     *
     * @since 5.1.0
     */
    ContourType[ContourType["LeftEye"] = 6] = "LeftEye";
    /**
     * The outline of the subject's right eye cavity.
     *
     * @since 5.1.0
     */
    ContourType[ContourType["RightEye"] = 7] = "RightEye";
    /**
     * The top outline of the subject's upper lip.
     *
     * @since 5.1.0
     */
    ContourType[ContourType["UpperLipTop"] = 8] = "UpperLipTop";
    /**
     * The bottom outline of the subject's upper lip.
     *
     * @since 5.1.0
     */
    ContourType[ContourType["UpperLipBottom"] = 9] = "UpperLipBottom";
    /**
     * The top outline of the subject's lower lip.
     *
     * @since 5.1.0
     */
    ContourType[ContourType["LowerLipTop"] = 10] = "LowerLipTop";
    /**
     * The bottom outline of the subject's lower lip.
     *
     * @since 5.1.0
     */
    ContourType[ContourType["LowerLipBottom"] = 11] = "LowerLipBottom";
    /**
     * The outline of the subject's nose bridge.
     *
     * @since 5.1.0
     */
    ContourType[ContourType["NoseBridge"] = 12] = "NoseBridge";
    /**
     * The outline of the subject's nose bridge.
     *
     * @since 5.1.0
     */
    ContourType[ContourType["NoseBottom"] = 13] = "NoseBottom";
    /**
     * The center of the left cheek.
     *
     * @since 5.1.0
     */
    ContourType[ContourType["LeftCheek"] = 14] = "LeftCheek";
    /**
     * The center of the right cheek.
     *
     * @since 5.1.0
     */
    ContourType[ContourType["RightCheek"] = 15] = "RightCheek";
})(ContourType || (ContourType = {}));
//# sourceMappingURL=definitions.js.map