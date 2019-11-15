import { action, observable, decorate } from 'mobx';
import remotedev from 'mobx-remotedev';

const baseUrl = 'https://parallelum.com.br/fipe/api/v1/';

const _defaultInitialState = {
    selectedVehicleType: "",

    selectedBrand: null,
    brands: [],

    selectedModel: null,
    models: [],

    selectedVehicleYear: null,
    vehicleYears: [],

    vehicleDetails: undefined,

    initialRedirect: false,
    filtersRedirect: false,
    detailsRedirect: false,

    initializationsCounter: 0
};

class FipeStore {
    constructor() {
        this.setInitialState(_defaultInitialState);
    }

    setInitialState = initialState => {
        const {
            brands,
            models,
            vehicleYears,
            selectedModel,
            selectedBrand,
            vehicleDetails,
            selectedVehicleYear,
            selectedVehicleType,
            initialRedirect,
            filtersRedirect,
            detailsRedirect,
            initializationsCounter,
        } = initialState;

        this.brands = brands;
        this.models = models;
        this.vehicleYears = vehicleYears;
        this.vehicleDetails = vehicleDetails;
        this.selectedBrand = selectedBrand;
        this.selectedModel = selectedModel;
        this.selectedVehicleYear = selectedVehicleYear;
        this.selectedVehicleType = selectedVehicleType;
        this.initialRedirect = initialRedirect;
        this.filtersRedirect = filtersRedirect;
        this.detailsRedirect = detailsRedirect;
        this.initializationsCounter = initializationsCounter;
    };

    incrementInitializationsCounter = () => {
        this.initializationsCounter += 1;
    }

    fillBrandRequest = responseFromRequest => {
        this.brands = responseFromRequest;
    };

    fillModelRequest = responseFromRequest => {
        this.models = responseFromRequest;
    };

    fillVehicleYearsRequest = responseFromRequest => {
        this.vehicleYears = responseFromRequest;
    };

    fillVehicleDetails = responseFromRequest => {
        this.vehicleDetails = responseFromRequest;
    };

    setSelectedVehicleType = selectedVehicleType => {
        this.selectedVehicleType = selectedVehicleType;
    };

    setSelectedBrand = selectedBrand => {
        this.selectedBrand = selectedBrand;

        this.selectedVehicleYear = null;
        this.selectedModel = null;
        this.vehicleDetails = null;

        this.models = [];
        this.vehicleYears = [];

        this.getModels(selectedBrand.value);
    };

    setSelectedModel = selectedModel => {
        this.selectedModel = selectedModel;
        this.selectedVehicleYear = null;
        this.vehicleDetails = null;

        this.vehicleYears = [];

        this.getVehicleYears(this.selectedBrand.value, this.selectedModel.value);
    };

    setSelectedVehicleYear = selectedVehicleYear => {
        this.selectedVehicleYear = selectedVehicleYear;

        this.getVehicleDetails(
            this.selectedBrand.value,
            this.selectedModel.value,
            this.selectedVehicleYear.value
        );
    };

    setInitialRedirect = value => {
        this.initialRedirect = value;
    }

    setFiltersRedirect = value => {
        this.filtersRedirect = value;
    }

    setDetailsRedirect = value => {
        this.detailsRedirect = value;
    }

    getVehicleTypedUrl = () => {
        return `${baseUrl + this.selectedVehicleType}/`;
    };

    getModels = async selectedBrandId => {
        const fetchedModels = await fetch(
            this.getVehicleTypedUrl() + `marcas/${selectedBrandId}/modelos`
        );
        const fetchedModelsInJSON = await fetchedModels.json();
        this.fillModelRequest(fetchedModelsInJSON.modelos);
    };

    getBrands = async () => {
        const fetchedBrands = await fetch(`${this.getVehicleTypedUrl()}marcas`);
        const fetchedBrandsInJSON = await fetchedBrands.json();
        this.fillBrandRequest(fetchedBrandsInJSON);
    };

    getVehicleYears = async (selectedBrandId, selectedModelId) => {
        const url = `${this.getVehicleTypedUrl()}marcas/${selectedBrandId}/modelos/${selectedModelId}/anos`;
        const fetchedVehicleYears = await fetch(url);
        const fetchedVehicleYearsInJSON = await fetchedVehicleYears.json();
        this.fillVehicleYearsRequest(fetchedVehicleYearsInJSON);
    };

    getVehicleDetails = async (
        selectedBrandId,
        selectedModelId,
        selectedvehicleYear
    ) => {
        const url =
            `${this.getVehicleTypedUrl()}marcas/${selectedBrandId}/modelos/${selectedModelId}/anos/${selectedvehicleYear}`;
        const fetchedVehicleDetails = await fetch(url);
        const fetchedVehicleDetailsInJSON = await fetchedVehicleDetails.json();
        this.fillVehicleDetails(fetchedVehicleDetailsInJSON);
    };

    clearSelectedBrand = () => {
        this.selectedBrand = null;
    };

    clearSelectedModel = () => {
        this.selectedModel = null;
    };

    clearSelectedVehicleYear = () => {
        this.selectedVehicleYear = null;
    };

    clearSelectedVehicleType = () => {
        this.selectedVehicleType = "";
    };
}

export default remotedev(
    decorate(FipeStore, {
        brands: observable,
        models: observable,
        vehicleYears: observable,
        selectedBrand: observable,
        vehicleDetails: observable,
        selectedModel: observable,
        selectedVehicleYear: observable,
        selectedVehicleType: observable,
        initialRedirect: observable,
        filtersRedirect: observable,
        detailsRedirect: observable,
        initializationsCounter: observable,

        getBrands: action,
        getVehicleYears: action,
        getModels: action,
        getVehicleTypedUrl: action,

        setInitialState: action,
        setSelectedBrand: action,
        setSelectedVehicleYear: action,
        setSelectedModel: action,
        setSelectedVehicleType: action,
        setInitialRedirect: action,
        setFiltersRedirect: action,
        setDetailsRedirect: action,

        fillBrandRequest: action,
        fillVehicleYearsRequest: action,
        fillModelRequest: action,
        fillVehicleDetails: action,

        incrementInitializationsCounter: action,

        clearSelectedVehicleType: action,
        clearSelectedBrand: action,
        clearSelectedModel: action,
        clearSelectedVehicleYear: action,
    })
);
