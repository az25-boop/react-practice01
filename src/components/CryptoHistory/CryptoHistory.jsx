const tableHeaders = ['№', 'price', 'amount', 'date'];
import style from './CryptoHistory.module.css';

export const CryptoHistory = (id, price, amount, date) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.id}>№</th>
          <th className={style.price}>PRICE</th>
          <th className={style.amount}>AMOUNT</th>
          <th className={style.date}>DATE</th>
        </tr>
      </thead>

      <tbody>
        <tr className={style.tr}>
          <td className={style.id}>1</td>
          <td className={style.price}>3190</td>
          <td className={style.amount}>0.24843</td>
          <td className={style.date}>02/01/2022, 1:14 PM</td>
        </tr>
        <tr className={style.tr}>
          <td className={style.id}>2</td>
          <td className={style.price}>3195</td>
          <td className={style.amount}>0.088</td>
          <td className={style.date}>05/09/2022, 2:24 PM</td>
        </tr>
      </tbody>
    </table>
  );
};
