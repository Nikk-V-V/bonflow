import RateRaceData from '@/constants/RatRace/CardsData.jsx';
import getRandomCard from '@/helpers/cards/getRandomCard.js';

export default function (set, get) {
    return {
        handleCard: cell => {
            const {
                processBabyCard,
                processDoodadCard,
                processOpportunityCard,
                processPaycheckCard,
                processMarketCard,
                processDownsizedCard,
                processCharityCard,
            } = get();

            switch (cell.type) {
                case 'Baby':
                    processBabyCard(cell);
                    break;
                case 'Doodad':
                    processDoodadCard(cell);
                    break;
                case 'Opportunity':
                    processOpportunityCard(cell);
                    break;
                case 'Paycheck':
                    processPaycheckCard(cell);
                    break;
                case 'Market':
                    processMarketCard(cell);
                    break;
                case 'Downsized':
                    processDownsizedCard(cell);
                    break;
                case 'Charity':
                    processCharityCard(cell);
                    break;
                default:
                    console.log('Unknown card type');
                    break;
            }
        },
        processBabyCard: cell => {
            const { openModal, closeModal } = get();

            openModal({
                title: "Народження дитини",
                content: (
                    <div>
                        <p className="text-lg mb-4 text-gray-300">
                            Вітаємо! Ви стали батьком.
                        </p>
                    </div>
                ),
                buttons: [
                    { label: "Ok", onClick: closeModal }
                ],
                showBackdrop: true,
                logo: "/images/icons/baby.png"
            });
        },
        processDoodadCard: cell => {
            const { openModal, closeModal } = get();
            const card = getRandomCard(RateRaceData.Da);

            openModal({
                title: "Витрати!",
                content: (
                    <div>
                        <p className="text-lg mb-4 text-gray-300">
                            Ви витратили гроші на непотрібні речі.
                        </p>
                    </div>
                ),
                buttons: [
                    { label: "Ok", onClick: closeModal }
                ],
                showBackdrop: true,
                logo: "/images/icons/expenses.webp"
            });
        },
        processOpportunityCard: cell => {
            const { openModal, closeModal } = get();
            const card = getRandomCard(RateRaceData.Opportunity);

            openModal({
                title: "Можливість",
                content: (
                    <div>
                        <p className="text-lg mb-4 text-gray-300">
                            У вас є можливість придбати акції компанії.
                        </p>
                    </div>
                ),
                buttons: [
                    { label: "Ok", onClick: closeModal }
                ],
                showBackdrop: true,
                logo: "/images/icons/opportunity.webp"
            });
        },
        processDreamCard: cell => {
            console.log('processDreamCard');
        },
        processPaycheckCard: cell => {
            const { openModal, closeModal } = get();
            console.log(cell);

            openModal({
                title: "День зарплати",
                content: (
                    <div>
                        <p className="text-lg mb-4 text-gray-300">
                            Ви отримуєте зарплату.
                        </p>
                    </div>
                ),
                buttons: [
                    { label: "Ok", onClick: closeModal }
                ],
                showBackdrop: true,
                logo: "/images/icons/payday.webp"
            });
        },
        processMarketCard: cell => {
            const { openModal, closeModal } = get();
            console.log(cell);
            openModal({
                title: "Ринок",
                content: (
                    <div>
                        <p className="text-lg mb-4 text-gray-300">
                            Акції компанії зростають.
                        </p>
                    </div>
                ),
                buttons: [
                    { label: "Ok", onClick: closeModal }
                ],
                showBackdrop: true,
                logo: "/images/icons/market.webp"
            });
        },
        processDownsizedCard: cell => {
            const { openModal, closeModal } = get();
            console.log(cell);
            openModal({
                title: "Звільнення!",
                content: (
                    <div>
                        <p className="text-lg mb-4 text-gray-300">
                            Ви звільнені з роботи.
                        </p>
                        <p>
                            Ви пропускаєте один хід.
                        </p>
                    </div>
                ),
                buttons: [
                    { label: "Ok", onClick: closeModal }
                ],
                showBackdrop: true,
                logo: "/images/icons/expenses.webp"
            });
        },
        processCharityCard: cell => {
            const { openModal, closeModal } = get();
            console.log(cell);
            openModal({
                title: "Благодійність",
                content: (
                    <div>
                        <p className="text-lg mb-4 text-gray-300">
                            Ви відправляєте гроші на благодійність.
                        </p>
                    </div>
                ),
                buttons: [
                    { label: "Ok", onClick: closeModal }
                ],
                showBackdrop: true,
                logo: "/images/icons/charity.webp"
            });
        },
    };
}
