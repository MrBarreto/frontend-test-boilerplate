import { action, observable, decorate } from "mobx";
import remotedev from "mobx-remotedev";
import VehicleType from '../enums/VehicleTypeEnum';

const baseUrl = "https://parallelum.com.br/fipe/api/v1/";

const _defaultInitialState = {
    selectedVehicleType: null,

    selectedBrand: null,
    brands: [],

    selectedModel: null,
    models: [],

    selectedCarYear: null,
    carYears: [],

    carInformation: undefined
};

class FipeStore {
    constructor() {
        this.setInitialState(_defaultInitialState);
        this.getBrands();
    }

    setInitialState = initialState => {
        const {
            brands,
            models,
            carYears,
            selectedModel,
            selectedBrand,
            carInformation,
            selectedCarYear,
            selectedVehicleType,
        } = initialState;

        this.brands = brands;
        this.models = models;
        this.carYears = carYears;
        this.carInformation = carInformation;
        this.selectedBrand = selectedBrand;
        this.selectedModel = selectedModel;
        this.selectedCarYear = selectedCarYear;
        this.selectedVehicleType = selectedVehicleType;
    };

    fillBrandRequest = responseFromRequest => {
        this.brands = responseFromRequest;
    };

    fillModelRequest = responseFromRequest => {
        this.models = responseFromRequest;
    };

    fillCarYearsRequest = responseFromRequest => {
        this.carYears = responseFromRequest;
    };

    fillCarInformation = responseFromRequest => {
        this.carInformation = responseFromRequest;
    };

    setSelectedVehicleType = selectedVehicleType => {
        this.selectedVehicleType = selectedVehicleType;
    }

    setSelectedBrand = selectedBrand => {
        this.selectedBrand = selectedBrand;

        this.selectedCarYear = null;
        this.selectedModel = null;
        this.carInformation = null;

        this.models = [];
        this.carYears = [];

        this.getModels(selectedBrand.value);
    };

    setSelectedModel = selectedModel => {
        this.selectedModel = selectedModel;
        this.selectedCarYear = null;
        this.carInformation = null;

        this.carYears = [];

        this.getCarYears(this.selectedBrand.value, this.selectedModel.value);
    };

    setSelectedCarYear = selectedCarYear => {
        this.selectedCarYear = selectedCarYear;

        this.getCarInformation(
            this.selectedBrand.value,
            this.selectedModel.value,
            this.selectedCarYear.value
        );
    };

    getBaseUrl = () => `${baseUrl}/${VehicleType}/`;


    getModels = async selectedBrandId => {
        const fetchedModels = await fetch(
            this.getBaseUrl() + `marcas/${selectedBrandId}/modelos`
        );
        const fetchedModelsInJSON = await fetchedModels.json();
        this.fillModelRequest(fetchedModelsInJSON.modelos);
    };

    getBrands = async () => {
        const fetchedBrands = await fetch(`${this.getBaseUrl()}/marcas`);
        const fetchedBrandsInJSON = await fetchedBrands.json();
        this.fillBrandRequest(fetchedBrandsInJSON);
    };

    getCarYears = async (selectedBrandId, selectedModelId) => {
        const url = `${this.getBaseUrl()}marcas/${selectedBrandId}/modelos/${selectedModelId}/anos`;
        const fetchedCarYears = await fetch(url);
        const fetchedCarYearsInJSON = await fetchedCarYears.json();
        this.fillCarYearsRequest(fetchedCarYearsInJSON);
    };

    getCarInformation = async (
        selectedBrandId,
        selectedModelId,
        selectedCarYear
    ) => {
        const url =
            `${this.getBaseUrl()}marcas/${selectedBrandId}/modelos/${selectedModelId}/anos/${selectedCarYear}`;
        const fetchedCarInformation = await fetch(url);
        const fetchedCarInformationInJSON = await fetchedCarInformation.json();
        this.fillCarInformation(fetchedCarInformationInJSON);
    };
}

export default remotedev(
    decorate(FipeStore, {
        brands: observable,
        models: observable,
        carYears: observable,
        selectedBrand: observable,
        carInformation: observable,
        selectedModel: observable,
        selectedCarYear: observable,
        
        getBrands: action,
        getCarYears: action,
        getModels: action,
        
        setInitialState: action,
        setSelectedBrand: action,
        setSelectedCarYear: action,
        setSelectedModel: action,
        setSelectedVehicleType: action,

        fillBrandRequest: action,
        fillCarYearsRequest: action,
        fillModelRequest: action,
        fillCarInformation: action
    })
);
