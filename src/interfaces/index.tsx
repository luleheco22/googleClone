export interface Result {
    cacheId: string;
    displayLink: string;
    formattedUrl: string;
    htmlFormattedUrl: string;
    htmlSnippet: string;
    htmlTitle: string;
    kind: string;
    link: string;
    pagemap: {
      cse_thumbnail: {
        src: string;
        width: string;
        height: string;
      }[];
      metatags: {
        [key: string]: string;
      }[];
      cse_image: {
        src: string;
      }[];
      // Add other properties from the pagemap object that you need
    };
    snippet: string;
    title: string;
  }
  
  export interface SearchResponse {
    context: {
      title: string;
      // Add other properties from the API response that you need
    };
    items: Result[];
    kind: string;
    queries: {
      request: any[]; // Actualiza el tipo según la estructura real de 'request'
      nextPage: any[]; // Actualiza el tipo según la estructura real de 'nextPage'
    };
    searchInformation: {
      formattedSearchTime: string;
      formattedTotalResults: string;
      searchTime: number;
      totalResults: string;
      // Add other properties from the API response that you need
    };
    url: {
      type: string;
      // Add other properties from the API response that you need
    };
  }