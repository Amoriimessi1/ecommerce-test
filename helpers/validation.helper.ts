/**
 *
 */
export default class Validator {
  //import each element without *
  /**
   *
   * @param must: boolean
   */
  static register = (must = true) => ({
    name: {
      presence: must,
      type: "string",
    },
    phone: {
      presence: must,
      type: "string",
      length: { maximum: 15, minimum: 10 },
    },
    password: {
      presence: must,
      type: "string",
      length: { maximum: 15, minimum: 4 },
    },
  });

  /**
   *
   * @param must: boolean
   */
  static otp = (must = true) => ({
    otp: {
      presence: must,
      type: "number",
    },
  });

  /**
   *
   * @param must: boolean
   */
  static login = (must = true) => ({
    phone: {
      presence: must,
      type: "string",
      length: { maximum: 15, minimum: 10 },
    },
    password: {
      presence: must,
      type: "string",
      length: { maximum: 15, minimum: 4 },
    },
  });

  /**
   *
   * @param must
   */

  static editUser = (must = false) => ({
    newName: {
      presence: must,
      type: "string",
    },
    newPhone: {
      presence: must,
      type: "string",
      length: { maximum: 15, minimum: 10 },
    },
    newPassword: {
      presence: must,
      type: "string",
      length: { maximum: 15, minimum: 4 },
    },
  });

  /**
   *
   * @param must :boolean
   */
  static forgotPassword = (must = true) => ({
    phone: {
      presence: must,
      type: "string",
      length: { maximum: 15, minimum: 10 },
    },
  });

  /**
   *
   * @param must
   */

  static newPassword = (must = true) => ({
    // phone: {
    //   presence: must,
    //   type: "string",
    //   length: { maximum: 15, minimum: 10 },
    // },
    newPassword: {
      presence: must,
      type: "string",
      length: { maximum: 15, minimum: 4 },
    },
    resetPassword: {
      presence: must,
      type: "string",
    },
  });

  /**
   *
   * @param must: boolean
   */
  static makeInvoice = (must = true) => ({
    address: {
      presence: must,
      type: "string",
    },
    method: {
      presence: must,
      type: "string",
      inclusion: {
        within: {
          zc: "zc",
          ah: "ah",
          cd: "cd",
        },
        message: "^%{value} is not valid",
      },
    },
    long: {
      presence: must,
      type: "string",
    },
    lat: {
      presence: must,
      type: "string",
    },
    products: {
      presence: must,
      type: "array",
    },
  });

  /**
   *
   * @param must: boolean
   */
  static oneProduct = (must = true) => ({
    id: {
      presence: must,
      type: "number",
    },
    quantity: {
      presence: must,
      type: "number",
    },
  });

  // /**
  //  *
  //  * @param must
  //  */
  //   static zcMethod=(must=true)=>({
  //     walletNumber: {
  //       presence: must,
  //       type: "string",
  //       length: { maximum: 15, minimum: 10 },
  //     },
  //     pin:{
  //       presence:must,
  //       type:"number",
  //     },
  //     otp: {
  //       presence: must,
  //       type: "number",
  //     }

  //   })
}
