import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    try {
     return console.log("Yo G")
  } catch (e) {
    console.error('Error fetching data:', e);
    return console.log("broken, son");
    }
};
