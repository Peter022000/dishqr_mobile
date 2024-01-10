export const Camera = jest.fn(() => ({
    startRecording: jest.fn(),
    stopRecording: jest.fn(),
    capture: jest.fn(),
}));

export const useCameraDevices = jest.fn(() => ({
    devices: [
        { id: 'front', type: 'front' },
        { id: 'back', type: 'back' },
    ],
}));
