export const LOCAL_DEFAULT_PATH = '/sessions';

export function defaultPath(capabilities: string[]): string {
  if (capabilities.includes('agent_health')) return '/health';
  if (capabilities.includes('agent_observability')) return '/';
  return LOCAL_DEFAULT_PATH;
}

export function pathAllowed(pathname: string, capabilities: string[]): boolean {
  if (pathname === '/health' || pathname.startsWith('/health/')) {
    return capabilities.includes('agent_health');
  }
  if (pathname === '/' || pathname.startsWith('/conversations/')) {
    return capabilities.includes('agent_observability');
  }
  if (pathname.startsWith('/sessions')) return capabilities.includes('sessions');
  if (pathname.startsWith('/savings')) return capabilities.includes('token_savings');
  if (pathname.startsWith('/optimization')) return capabilities.includes('optimization');
  if (pathname.startsWith('/skills')) return capabilities.includes('skills');
  if (pathname.startsWith('/security')) return capabilities.includes('security');
  if (pathname.startsWith('/audit')) return capabilities.includes('system_audit');
  if (pathname.startsWith('/enforcement')) return capabilities.includes('enforcement');
  if (pathname.startsWith('/atif')) return capabilities.includes('atif');
  if (pathname.startsWith('/settings')) return capabilities.includes('settings');
  return true;
}
