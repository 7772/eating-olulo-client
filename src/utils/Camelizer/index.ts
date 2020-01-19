import humps from 'humps'; // https://github.com/domchristie/humps


class Camelizer {
  /**
   * camelize
   *
   * 'hello_world' --> 'helloWorld'
   *
   * @param {string} value
   * @returns string
   */
  static camelize(value = '') {
      return humps.camelize(value);
  }

  /**
   * decamelize
   *
   * 'helloWorld' --> 'hello_world'
   *
   * @param {string} value
   * @returns string
   */
  static decamelize(value = '', options = {}) {
      return humps.decamelize(value, options);
  }

  /**
   * camelizeKeys
   *
   * { attr_one: 'foo', attr_two: 'bar' } -->
   *  { attrOne: 'foo', attrTwo: 'bar' }
   *
   * @param {object} value
   * @returns object
   */
  static camelizeKeys(value = {}, options = {}) {
      return humps.camelizeKeys(value, options);
  }

  /**
   * decamelizeKeys
   *
   * { attrOne: 'foo', attrTwo: 'bar' } -->
   *  { attr_one: 'foo', attr_two: 'bar' }
   *
   * @param {object} value
   * @param options
   * @returns object
   */
  static decamelizeKeys(value = {}, options = {}) {
      return humps.decamelizeKeys(value, options);
  }

  /**
   * transform (Higher Order Function)
   *
   * Camelize 변환이 일어난 response 가 필요할 때 사용
   *
   * @param cb
   */
  static transform(cb: Function) {
      return (response: any) => {
          const camelizedReponse = this.camelizeKeys(response);

          if (typeof cb === 'function') {
              cb(camelizedReponse);
          } else {
              console.error('transform 함수의 인자가 callback 함수가 아닙니다.');
          }
      }
  }
}

export default Camelizer;
