export interface Description {
  text: string;
  list: string[];
}

export interface Material {
name: string;
text: string;
img: string
}

export interface Care {
title: string;
text: string;
img: string;
}

export interface Size {
  num: number;
  width: string;
  toePlusHeel: string;
}

export interface Product {
  slug: string;
  title: string;
  price: number;
  color: string;
  styleId: string;
  desc: Description | null;
  material: Material | null,
  care: Care | null;
  images: string[];
}

export interface Variant {
  name: string;
  image: string;
}
