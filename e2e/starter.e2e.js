import {device, expect, element, waitFor} from 'detox';
import {
  loginScreenTestIds,
  homeScreenTestIds,
  detailScreenTestIds,
} from './testIds';

beforeAll(async () => {
  await device.launchApp();
  const platform = await device.getPlatform();
  console.log('Test running on platform: ', platform, device.name);
  console.log('Test running on device: ', device.name);
});

afterAll(async () => {
  await device.terminateApp();
  await device.uninstallApp();
});

describe('Login test', () => {
  it('should display login screen', async () => {
    await expect(element(by.id(loginScreenTestIds.container))).toBeVisible();
  });

  it('should display user input', async () => {
    await expect(element(by.id(loginScreenTestIds.userInput))).toBeVisible();
  });

  it('should display password input', async () => {
    await expect(element(by.id(loginScreenTestIds.passInput))).toBeVisible();
  });

  it('should display login button', async () => {
    await expect(element(by.id(loginScreenTestIds.submit))).toBeVisible();
  });

  it('should login successfully', async () => {
    await element(by.id(loginScreenTestIds.userInput)).typeText('admin');
    await element(by.id(loginScreenTestIds.passInput)).typeText('1234');
    await element(by.id(loginScreenTestIds.submit)).tap();
    await waitFor(element(by.id(homeScreenTestIds.container)))
      .toBeVisible()
      .withTimeout(5000);
  });
});

describe('Home screen test', () => {
  it('should display home screen', async () => {
    await expect(element(by.id(homeScreenTestIds.container))).toBeVisible();
  });

  it('should display at least one News item', async () => {
    await expect(
      element(by.id(homeScreenTestIds.scrollView + '_0')),
    ).toBeVisible();
  });
});

describe('Detail screen test', () => {
  it('should display details screen', async () => {
    await element(by.id(homeScreenTestIds.scrollView + '_0')).tap();
  });

  it('should display title of News', async () => {
    await expect(element(by.id(detailScreenTestIds.title))).toBeVisible();
  });

  it('should display title of News', async () => {
    await expect(element(by.id(detailScreenTestIds.description))).toBeVisible();
  });
});
