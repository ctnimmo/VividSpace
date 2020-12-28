export function FormatDate(date: string): string {
    // return date;
    if (!date) {
        return "";
    }
    let d = new Date(date);

    let minutes = (d.getMinutes() < 10) ? '0' + d.getMinutes() : d.getMinutes()
    let day = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate()
    let month = ((d.getMonth() + 1) < 10) ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1)


    return day + "/" + month + "/" + d.getFullYear() +
        " " + d.getHours() + ":" + minutes

}
