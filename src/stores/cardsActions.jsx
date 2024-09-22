export default function (set, get) {
    return {
        handleCard: cell => {
            const {
                processBabyCard,
                processDoodadCard,
                processOpportunityCard,
            } = get();

            switch (cell.type) {
                case 'Baby':
                    processBabyCard();
                    break;
                case 'Doodad':
                    processDoodadCard();
                    break;
                case 'Opportunity':
                    processOpportunityCard();
                    break;
                case 'Paycheck':
                    break;
                case 'Market':
                    break;
                case 'Downsized':
                    break;
                case 'Charity':
                    break;
                default:
                    break;
            }
        },
        processBabyCard: cell => {},
        processDoodadCard: cell => {},
        processOpportunityCard: cell => {},
        processDreamCard: cell => {},
        processPaycheckCard: cell => {},
        processMarketCard: cell => {},
        processDownsizedCard: cell => {},
        processCharityCard: cell => {},
    };
}
