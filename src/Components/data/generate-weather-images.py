#!/usr/bin/env python3

import sys, re, csv, json, pprint
from collections import defaultdict

'''
This script generates Wx image URLs from the given CSV file.

Usage:
>> ./generate-weather-images.py input_csv_filename.csv output_js_filename.js

* Parameters:
** input_csv_filename.csv: the updated Wx image paths in the following CSV format:

site,title,imageUrl
WSB,5 Day Forecast,https://mediaweb.wsbtv.com/weather/5day.jpg
WSB,High Temperatures,https://mediaweb.wsbtv.com/weather/highs.jpg

** output_js_filename.jsn: The output JS file, e.g. slideshow.js
'''

pp = pprint.PrettyPrinter(indent=4)

if __name__ == "__main__":
    input_csv_filename = sys.argv[1]
    output_js_filename = sys.argv[2]

    weather_images = defaultdict(list)

    with open(input_csv_filename, newline=None) as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            site = row["site"].lower()
            title = row["title"]
            imageUrl = row["imageUrl"]

            weather_images[site].append({
                "url": imageUrl,
                "title": title
            })

    with open(output_js_filename, 'w') as out_js:
        print("\nGenerating weather Wx image URLs '{}' from input file '{}' ...".format(output_js_filename, input_csv_filename))
        var_name = "slideshow"
        out_js.write("const {} = ".format(var_name))
        json.dump(weather_images, out_js, indent=2)
        out_js.write(";\n\nexport default {};".format(var_name))
        print("Done.\n")
