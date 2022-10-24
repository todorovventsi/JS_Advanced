const { expect } = require("chai");

const chooseYourCar = {
    choosingType(type, color, year) {
        if (year < 1900 || year > 2022) {
            throw new Error(`Invalid Year!`);
        } else {
            if (type == "Sedan") {
                if (year >= 2010) {
                    return `This ${color} ${type} meets the requirements, that you have.`;
                } else {
                    return `This ${type} is too old for you, especially with that ${color} color.`;
                }
            }
            throw new Error(
                `This type of car is not what you are looking for.`
            );
        }
    },

    brandName(brands, brandIndex) {
        let result = [];

        if (
            !Array.isArray(brands) ||
            !Number.isInteger(brandIndex) ||
            brandIndex < 0 ||
            brandIndex >= brands.length
        ) {
            throw new Error("Invalid Information!");
        }
        for (let i = 0; i < brands.length; i++) {
            if (i !== brandIndex) {
                result.push(brands[i]);
            }
        }
        return result.join(", ");
    },

    carFuelConsumption(distanceInKilometers, consumptedFuelInLiters) {
        let litersPerHundredKm = (
            (consumptedFuelInLiters / distanceInKilometers) *
            100
        ).toFixed(2);

        if (
            typeof distanceInKilometers !== "number" ||
            distanceInKilometers <= 0 ||
            typeof consumptedFuelInLiters !== "number" ||
            consumptedFuelInLiters <= 0
        ) {
            throw new Error("Invalid Information!");
        } else if (litersPerHundredKm <= 7) {
            return `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`;
        } else {
            return `The car burns too much fuel - ${litersPerHundredKm} liters!`;
        }
    },
};

describe("Testing chooseYourCar object", () => {
    describe('Testing choosingType("type, color, year)', () => {
        it("Throws an error for invalid year", () => {
            try {
                chooseYourCar.choosingType("type", "color", 1899);
            } catch (err) {
                expect(err.message).to.equal("Invalid Year!");
            }
        });
        it("Throws anerror for invalid year", () => {
            try {
                chooseYourCar.choosingType("type", "color", 2023);
            } catch (err) {
                expect(err.message).to.equal("Invalid Year!");
            }
        });
        it("Throws anerror for invalid type", () => {
            try {
                chooseYourCar.choosingType("coupe", "color", 2022);
            } catch (err) {
                expect(err.message).to.equal(
                    "This type of car is not what you are looking for."
                );
            }
            try {
                chooseYourCar.choosingType("wagoon", "color", 2022);
            } catch (err) {
                expect(err.message).to.equal(
                    "This type of car is not what you are looking for."
                );
            }
        });
        it("Returns correct message when pick a car is succsesfull", () => {
            expect(chooseYourCar.choosingType("Sedan", "red", 2010)).to.equal(
                `This red Sedan meets the requirements, that you have.`
            );
        });
        it("Returns correct message when pick a car is succsesfull", () => {
            expect(chooseYourCar.choosingType("Sedan", "red", 2011)).to.equal(
                `This red Sedan meets the requirements, that you have.`
            );
        });
        it("Returns correct message when pick a car is succsesfull", () => {
            expect(chooseYourCar.choosingType("Sedan", "red", 2009)).to.equal(
                `This Sedan is too old for you, especially with that red color.`
            );
        });
    });

    describe("Testing bradnName(brands, brandIndex", () => {
        it("Throws an error for invalid first input", () => {
            try {
                chooseYourCar.brandName("BMW Toyota", 1);
            } catch (err) {
                expect(err.message).to.equal("Invalid Information!");
            }
        });
        it("Throws an error for invalid second input", () => {
            try {
                chooseYourCar.brandName(["BMW", "Toyota"], "1");
            } catch (err) {
                expect(err.message).to.equal("Invalid Information!");
            }
            try {
                chooseYourCar.brandName(["BMW", "Toyota"], 3);
            } catch (err) {
                expect(err.message).to.equal("Invalid Information!");
            }
        });
        it("Removes the correct brand name", () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota"], 0)).to.equal(
                "Toyota"
            );
        });
        it("Removes the correct brand name", () => {
            expect(
                chooseYourCar.brandName(["BMW", "Toyota", "Audi"], 1)
            ).to.equal("BMW, Audi");
        });
    });

    describe("Testing CarFuelConsumption(distanceInKilometers, consumptedFuelInLitres", () => {
        it("Throws an error for invalid inputs", () => {
            try {
                chooseYourCar.carFuelConsumption("100", 100);
            } catch (err) {
                expect(err.message).to.equal("Invalid Information!");
            }
            try {
                chooseYourCar.carFuelConsumption(100, "100");
            } catch (err) {
                expect(err.message).to.equal("Invalid Information!");
            }
            try {
                chooseYourCar.carFuelConsumption(-100, -100);
            } catch (err) {
                expect(err.message).to.equal("Invalid Information!");
            }
        });
        it("Returns the correct calculations", () => {
            expect(chooseYourCar.carFuelConsumption(100, 10)).to.equal(
                "The car burns too much fuel - 10.00 liters!"
            );
            expect(chooseYourCar.carFuelConsumption(100, 5)).to.equal(
                "The car is efficient enough, it burns 5.00 liters/100 km."
            );
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal(
                "The car is efficient enough, it burns 7.00 liters/100 km."
            );
        });
    });
});
