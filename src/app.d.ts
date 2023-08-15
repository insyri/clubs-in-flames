// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

  type ClubInfo = {
    president: string;
    name: string;
    pmoc: string; // Prefered method of communication
    staff: string[];
    additional_info: string | undefined;
    code: string | undefined;
  };
}

export {};
