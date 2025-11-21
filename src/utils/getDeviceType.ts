import { headers } from 'next/headers';

export type DeviceType = 'mobile' | 'desktop';

export async function getDeviceType(): Promise<DeviceType> {
    const headersList = await headers();
    const userAgent = headersList.get('user-agent') || '';

    // Simple regex for mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    return isMobile ? 'mobile' : 'desktop';
}
