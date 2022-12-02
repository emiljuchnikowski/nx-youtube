import { shared } from "@test-nx/shared";

export function users(): string {
  const sharedResult = shared();

  return 'users';
}
