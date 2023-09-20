function fitCardsToWidth(params?: props): result {
  const defaultWidth = params?.defaultWidth || 345,
    gap = params?.gap || 16,
    containerId = params?.containerId || "main";

  const CARD_DEFAULT_WIDTH = defaultWidth;
  const mainContainer = document.getElementById(containerId);
  let fullWidth = mainContainer?.clientWidth;
  fullWidth = typeof fullWidth === "number" ? fullWidth : CARD_DEFAULT_WIDTH;
  const cardsPerRow = Math.floor(fullWidth / CARD_DEFAULT_WIDTH);
  const cardWidth = Math.floor(
    (fullWidth - cardsPerRow * gap + 14) / cardsPerRow
  );
  return { itemWidth: cardWidth, itemsPerRow: cardsPerRow };
}

type props =
  | { defaultWidth?: number; containerId?: string; gap?: number }
  | undefined;

type result = {
  itemWidth: number;
  itemsPerRow: number;
};

export default fitCardsToWidth;
