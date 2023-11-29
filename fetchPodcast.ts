import axios from 'axios';
import * as xml2js from 'xml2js';

export async function fetchAndParseRSS(url: string) {
    try {
        const response = await axios.get(url, { responseType: 'text' });
        const xml = response.data;
        const parser = new xml2js.Parser({ explicitArray: false });

        return parser.parseStringPromise(xml);
    } catch (error) {
        console.error('Error fetching/parsing RSS feed:', error);
        throw error;
    }
}