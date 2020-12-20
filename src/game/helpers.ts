import playerCardTypes from "../data/player_card_types.json";
import { ICard } from "./reducer";

// Card Actions

let nextCardId = 13;

export function createCard(
  cardData: any,
  stack: string,
  facing: boolean,
  order: number
): ICard {
  const card = cardData;
  card.id = nextCardId;
  card.key = card.id;
  card.stack = stack;
  card.facingUp = facing;
  card.order = order;
  nextCardId++;
  return card;
}

export function generateRandomCards(): ICard[] {
  return ["rocket", "speech", "housing"].map(
    (cardId: string, index: number) => {
      return createCard(
        (playerCardTypes as any)[cardId],
        "pick-a-card",
        true,
        index
      );
    }
  );
}

export function assignCardStack(
  cards: ICard[],
  filter: (card: ICard) => boolean,
  stack: string,
  orStack: string
): ICard[] {
  return cards.map((_card: any) => {
    if (filter(_card)) {
      return { ..._card, stack };
    } else {
      return { ..._card, stack: orStack ? orStack : _card.stack };
    }
  });
}

// Array Actions

export function array_move(arr: any[], old_index: number, new_index: number) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(null);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
}

export function array_shuffle(array: any[]) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
