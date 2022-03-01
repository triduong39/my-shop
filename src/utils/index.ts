export const formatToVND = (money: number) => {
    return money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
};
