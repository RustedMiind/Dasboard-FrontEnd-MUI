function fitCardsToWidth(params?: props): result {
  const defaultWidth = params?.defaultWidth || 345,
    gap = params?.gap || 16,
    windowPadding = params?.windowPadding || 48,
    containerId = params?.containerId || "main";

  const CARD_DEFAULT_WIDTH = defaultWidth;
  // const mainContainer = document.getElementById(containerId);
  let fullWidth = window.innerWidth - windowPadding;
  fullWidth = typeof fullWidth === "number" ? fullWidth : CARD_DEFAULT_WIDTH;
  const cardsPerRow = Math.floor(fullWidth / CARD_DEFAULT_WIDTH);
  const cardWidth = Math.floor(
    (fullWidth - (cardsPerRow * gap - gap)) / cardsPerRow
  );

  return {
    itemWidth: cardsPerRow >= 2 ? cardWidth : fullWidth,
    itemsPerRow: cardsPerRow,
  };
}

type props =
  | {
      defaultWidth?: number;
      containerId?: string;
      gap?: number;
      windowPadding?: number;
    }
  | undefined;

type result = {
  itemWidth: number;
  itemsPerRow: number;
};

export default fitCardsToWidth;
