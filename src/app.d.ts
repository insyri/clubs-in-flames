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
    president: Person | null;
    sponsor: Person | null;
    name: string;
    pmoc: string | null; // Prefered method of communication
    staff: Person[]; // length of 0 = null
    additional_info: string | null;
    code: string | null;
  };

  type Person = {
    name: string;
    id: number;
  };
}

export {};
