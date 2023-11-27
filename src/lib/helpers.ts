export type Indexed<T = any> = {
    [key in string]: T;
};

type PlainObject<T = any> = {
    [k in string]: T;
};

export const merge = (lhs: Indexed, rhs: Indexed): Indexed => {
  for (let p in rhs) {
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }

    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
        lhs[p] = rhs[p];
    }
  }
  return lhs;
}
export const set = (object: Indexed | unknown, path: string, value: unknown): Indexed | unknown => {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  const result = path.split('.')
    .reduceRight<Indexed>((acc, key) => ({
      [key]: acc,
    }), value as any);

  return merge(object as Indexed, result);
}

// is Equal
const isArray = (value: unknown): value is [] => Array.isArray(value);
const isPlainObject = (value: unknown): value is PlainObject => {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]';
}
const isArrayOrObject = (value: unknown): value is [] | PlainObject => isPlainObject(value) || isArray(value);

export const isEqual = (lhs: PlainObject, rhs: PlainObject): boolean => {
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
        return false;
    }
    for (const [key, value] of Object.entries(lhs)) {
        const rightValue = rhs[key];
        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            if (isEqual(value as PlainObject, rightValue as PlainObject)) {
                continue;
            }
            return false;
        }

        if (value !== rightValue) {
            return false;
        }
    }

    return true;
};
