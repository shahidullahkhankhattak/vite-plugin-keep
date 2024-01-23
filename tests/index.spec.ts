import fsExtra from 'fs-extra';
import vitePluginKeep from '../src';

jest.mock('path', () => ({
    resolve: jest.fn().mockImplementation((path) => `/mocked/path/${path}`)
}))
describe('vite-plugin-keep', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });
    it('should copy files from source to destination', async () => {
        const copySyncMock = jest.spyOn(fsExtra, 'copySync');
        copySyncMock.mockImplementation(() => {});

        const plugin = vitePluginKeep({
            src: 'test-src',
            dest: 'test-dest'
        }) as { name: string, generateBundle: () => void };

        await plugin.generateBundle();

        expect(copySyncMock).toHaveBeenCalledWith('/mocked/path/test-src', '/mocked/path/test-dest', expect.anything());
    });

    // More tests...
});
