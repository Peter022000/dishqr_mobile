export const Camera = jest.fn(() => ({
    // Add any necessary methods or properties you want to mock
    startRecording: jest.fn(),
    stopRecording: jest.fn(),
    capture: jest.fn(),
    // ... mock other methods or properties as needed
}));

export const useCameraDevices = jest.fn(() => ({
    // Mock the result of useCameraDevices hook
    devices: [
        { id: 'front', type: 'front' },
        { id: 'back', type: 'back' },
        // Add more mock devices as needed
    ],
    // ... mock other properties or methods as needed
}));
