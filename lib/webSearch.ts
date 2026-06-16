import axios from "axios";
import * as cheerio from "cheerio";

export async function webSearch(query: string) {
  try {
    // DuckDuckGo HTML search (FREE, no API key)
    const url = `https://duckduckgo.com/html/?q=${encodeURIComponent(query)}`;

    const { data } = await axios.get(url);

    const $ = cheerio.load(data);

    const results: string[] = [];

    $(".result__snippet").each((_, el) => {
      const text = $(el).text();
      if (text) results.push(text);
    });

    return results.slice(0, 5).join("\n");
  } catch (err) {
    return "";
  }
}