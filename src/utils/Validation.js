import ERROR from '../constants/Error.js';
import CONSTANTS from '../constants/Constants.js';
import messageFormat from './messageFormat.js';

const isDuplicate = arr => {
  return arr.some((item, index) => index !== arr.lastIndexOf(item));
};

const validation = {
  isValidInputPurchaseAmount(purchaseAmount) {
    if (!purchaseAmount) {
      throw messageFormat.error(ERROR.EMPTY_INPUT);
    }
    if (!purchaseAmount.match(/^\d+$/)) {
      throw messageFormat.error(ERROR.INPUT_PURCHASE_AMOUNT.INVALID_FORMAT);
    }
    if (
      purchaseAmount < CONSTANTS.MIN_PURCHASE_AMOUNT ||
      purchaseAmount > CONSTANTS.MAX_PURCHASE_AMOUNT
    ) {
      throw messageFormat.error(
        ERROR.INPUT_PURCHASE_AMOUNT.INVALID_PRICE_RANGE,
      );
    }
    if (!Number.isInteger(Number(purchaseAmount) / 1000)) {
      throw messageFormat.error(ERROR.INPUT_PURCHASE_AMOUNT.INVALID_PRICE_UNIT);
    }
  },

  isValidInputWinningNumbers(winningNumbers) {},

  isValidInputBonusNumber(bonusNumber) {},
};

export default validation;
