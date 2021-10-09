switch(province) {
    case 'ONTARIO': {
      rate = ONTARIO_RATE;
      amt = base * ONTARIO_RATE;
      calc = 2 * basis(amt) + extra(amt) * 1.05;
      break;
    }

    case 'QUEBEC': 
    case 'ALBERTA': {
      rate = (province == 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;
      amt = base * rate;
      calc = 2 * basis(amt) + extra(amt) * 1.05;
      points = (province == 'QUEBEC') ? 2 : points;
      break;
    }

    default: {
      rate = 1;
      amt = base;
      calc = 2 * basis(amt) + extra(amt) * 1.05; 
    }
}