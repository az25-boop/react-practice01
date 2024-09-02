// const tableHeaders = ['№', 'price', 'amount', 'date'];
import style from './CryptoHistory.module.css';

export const CryptoHistory = items => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        <tr className={style.tr}>
          <td className={style.td}>1</td>
          <td className={style.td}>3190</td>
          <td className={style.td}>0.24843</td>
          <td className={style.td}>02/01/2022, 1:14 PM</td>
        </tr>
        <tr className={style.tr}>
          <td className={style.td}>2</td>
          <td className={style.td}>3195</td>
          <td className={style.td}>0.088</td>
          <td className={style.td}>05/09/2022, 2:24 PM</td>
        </tr>
      </tbody>
    </table>
  );
};
