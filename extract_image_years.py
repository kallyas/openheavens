#!/usr/bin/env python3
"""
One-off script to extract creation years from gallery images.
This script reads EXIF data from images and organizes them by year.
"""

import os
from PIL import Image
from PIL.ExifTags import TAGS
from datetime import datetime
import json
from collections import defaultdict

def get_image_creation_year(image_path):
    """Extract the creation year from an image's EXIF data."""
    try:
        image = Image.open(image_path)
        exif_data = image._getexif()

        if exif_data:
            for tag_id, value in exif_data.items():
                tag = TAGS.get(tag_id, tag_id)
                # Look for DateTime, DateTimeOriginal, or DateTimeDigitized
                if tag in ['DateTime', 'DateTimeOriginal', 'DateTimeDigitized']:
                    # EXIF datetime format: 'YYYY:MM:DD HH:MM:SS'
                    try:
                        date_obj = datetime.strptime(str(value), '%Y:%m:%d %H:%M:%S')
                        return date_obj.year
                    except ValueError:
                        continue

        # Fallback: use file modification time
        mtime = os.path.getmtime(image_path)
        return datetime.fromtimestamp(mtime).year

    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        # Fallback: use file modification time
        try:
            mtime = os.path.getmtime(image_path)
            return datetime.fromtimestamp(mtime).year
        except:
            return None

def main():
    gallery_dir = 'public/images/gallery'

    if not os.path.exists(gallery_dir):
        print(f"Directory {gallery_dir} not found!")
        return

    # Get all image files
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.webp'}
    images = [f for f in os.listdir(gallery_dir)
              if os.path.splitext(f.lower())[1] in image_extensions]

    print(f"Found {len(images)} images in {gallery_dir}")
    print("-" * 60)

    # Organize images by year
    images_by_year = defaultdict(list)

    for image_file in sorted(images):
        image_path = os.path.join(gallery_dir, image_file)
        year = get_image_creation_year(image_path)

        if year:
            images_by_year[year].append(image_file)
            print(f"{image_file}: {year}")
        else:
            print(f"{image_file}: Could not determine year")

    print("\n" + "=" * 60)
    print("SUMMARY BY YEAR:")
    print("=" * 60)

    for year in sorted(images_by_year.keys(), reverse=True):
        print(f"\n{year} ({len(images_by_year[year])} images):")
        for img in images_by_year[year]:
            print(f"  - {img}")

    # Save to JSON file for easier consumption
    output_data = {
        str(year): imgs for year, imgs in sorted(images_by_year.items(), reverse=True)
    }

    output_file = 'gallery_by_year.json'
    with open(output_file, 'w') as f:
        json.dump(output_data, f, indent=2)

    print(f"\n\nResults saved to {output_file}")

if __name__ == '__main__':
    main()
