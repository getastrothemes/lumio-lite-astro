declare module "lucide/dist/esm/icons/*.mjs" {
  type IconNode = [
    "path" | "polyline" | "polygon" | "line" | "circle" | "rect",
    Record<string, string | number>,
  ];

  const icon: IconNode[];
  export default icon;
}
