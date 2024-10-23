import { Pipe, PipeTransform } from "@angular/core";
import { Person } from "../models/person";

@Pipe({
    name: 'sortpeople'
})
export class SortPeoplePipe implements PipeTransform {
    transform(value: Person[], ...args: string[]): Person[] {
        if (args[0] && args[0] !== '') {
            switch (args[0]) {
                case 'Name':
                    value.sort(
                        (p1, p2) => {
                            return p1
                                .name
                                .toLocaleLowerCase()
                                .localeCompare(
                                    p2.name
                                        .toLocaleLowerCase())
                        }
                    )
                    break;

                case 'Salary':
                    value.sort(
                        (p1, p2) => {
                            return p1.salary - p2.salary
                        }
                    )
                    break;

                default:
                    value.sort(
                        (p1, p2) => {
                            return p1
                                .name
                                .toLocaleLowerCase()
                                .localeCompare(
                                    p2.name
                                        .toLocaleLowerCase())
                        }
                    )
                    break;
            }
        }
        return value;
    }
}