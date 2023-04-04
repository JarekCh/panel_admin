import css from './Dashboard.module.css';
import { cardsData, groupNumber } from '../../data';
import Statistics from '../../components/Statistics/Statistics';
import Orders from '../../components/Orders/Orders';

const Dashboard = () => {
  return (
    <div className={css.container}>
      {/* left side of dashboard page*/}
      <div className={css.dashboard}>
        <div className={`${css.dashboardHead} theme-container`}>
          <div className={css.head}>
            <span>Dashboard</span>
            <div className={css.durationButton}>
              <select>
                <option value=''>1 week</option>
                <option value=''>1 month</option>
                <option value=''>1 year</option>
              </select>
            </div>
          </div>
          {/* dashboard cards with info */}
          <div className={css.cards}>
            {cardsData.map((card, index) => (
              <div key={index} className={css.card}>
                <div className={css.cardHead}>
                  <span>{card.title}</span>
                  <span>+{card.change}</span>
                </div>

                <div className={css.cardAmount}>
                  <span>$</span>
                  <span>{groupNumber(card.amount)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Statistics />
      </div>

      {/* right side of dashboard page */}
      <Orders />
    </div>
  );
};

export default Dashboard;
