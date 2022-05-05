import { soma } from "./soma";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature("./src/aplicacoes-internet/Testes-TDD-BDD/soma/soma.feature");

describe("testando função soma", () => {
    it("A soma deve dar 3", () => {
        const res = soma(1,2);
        expect(res).toBe(3);
    });
});

defineFeature(feature, test => {
    test("soma 1 + 2 resulta em 3", ({ given, when, then }) => {
        let x;
        let y;

        given("1", () => {
            x = 1;
        });

        when("soma 2", () => {
            y = soma(x,2);
        });

        then("a soma é 3", () => {
            expect(y).toBe(3);
        });
    });
});