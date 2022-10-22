class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(...employeeInfo) {
        for (let param of employeeInfo) {
            if (param == "" || param == undefined || param == null) {
                throw new Error("Invalid input!");
            }
        }
        let [name, salary, position, department] = employeeInfo;

        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        let employee = { name, salary, position };

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }
        this.departments[department].push(employee);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = "";
        let bestAvarage = 0;
        for (let entry of Object.entries(this.departments)) {
            let department = entry[0];
            let staffList = entry[1];
            let totalSalaries = 0;
            let avarage;
            for (let employee of staffList) {
                totalSalaries += employee.salary;
            }

            avarage = totalSalaries / staffList.length;

            if (avarage > bestAvarage) {
                bestAvarage = avarage;
                bestDepartment = department;
            }
        }
        this.departments[bestDepartment].sort((x, y) => {
            if (x.salary > y.salary) return -1;
            if (x.salary < y.salary) return 1;
            if (x.name < y.name) return -1;
            if (x.name > y.name) return 1;
        });

        let bestEmployes = [];

        for (let employee of this.departments[bestDepartment]) {
            let { name, salary, position } = employee;
            bestEmployes.push(`${name} ${salary} ${position}`);
        }

        return `Best Department is: ${bestDepartment}\nAverage salary: ${bestAvarage.toFixed(
            2
        )}\n${bestEmployes.join("\n")}`;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

("Best Department is: Construction\nAverage salary: 1500.00\nStanimir 2000 engineer\nStan 2000 architect\nPesho 1500 electrical engineer\nSlavi 500 dyer");
("Best Department is: Construction\nAverage salary: 1500.00\nStan 2000 architect\nStanimir 2000 engineer\nPesho 1500 electrical engineer\nSlavi 500 dyer");
