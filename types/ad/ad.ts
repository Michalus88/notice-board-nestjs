export interface AdSanitize {
  id: string;
  lat: number;
  lon: number;
}

export interface AdComplet extends AdSanitize {
  name: string;
  price: number;
  olxUrl: string;
  allegroUrl: string;
}
