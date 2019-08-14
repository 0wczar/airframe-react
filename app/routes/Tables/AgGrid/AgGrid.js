import React from 'react';
import { chain, reduce } from 'lodash';
import fetch from 'node-fetch';

import {
    Container,
    Card,
    CardFooter,
    CardHeader,
    Input,
    InputGroup,
} from './../../../components';
import {
    AgGridReact,
    AgGridColumn,
} from './../../../components/agGrid';
import {
    HeaderMain,
} from './../../components/HeaderMain';
import colors from './../../../colors';

/*
    CONSTS
*/
const DATA_URL = "https://api.myjson.com/bins/18oni9";

const COUNTRY_CODES = {
    Ireland: "ie",
    Spain: "es",
    "United Kingdom": "gb",
    France: "fr",
    Germany: "de",
    Sweden: "se",
    Italy: "it",
    Greece: "gr",
    Iceland: "is",
    Portugal: "pt",
    Malta: "mt",
    Norway: "no",
    Brazil: "br",
    Argentina: "ar",
    Colombia: "co",
    Peru: "pe",
    Venezuela: "ve",
    Uruguay: "uy"
};

const IT_SKILLS = ["android", "css", "html5", "mac", "windows"];
const IT_SKILLS_NAMES = ["Android", "CSS", "HTML 5", "Mac", "Windows"];

const PROFICIENCY_NONE = "none";
const PROFICIENCY_ABOVE40 = "above40";
const PROFICIENCY_ABOVE60 = "above60";
const PROFICIENCY_ABOVE80 = "above80";

const PROFICIENCY_NAMES = ["No Filter", "Above 40%", "Above 60%", "Above 80%"];
const PROFICIENCY_VALUES = [
    PROFICIENCY_NONE,
    PROFICIENCY_ABOVE40,
    PROFICIENCY_ABOVE60,
    PROFICIENCY_ABOVE80
];

/*
    Custom Renderers
*/
const nameRenderer = ({ data }) => `
        <span class="text-inverse">
            ${ data.name }
        </span>
    `;
const skillsCellRenderer = ({ data }) =>
    chain(IT_SKILLS)
        .map((skill) => data && data.skills[skill] ?
            `<img src="//www.ag-grid.com/images/skills/${skill}.png" width="16px" title="${ skill }" />` : ''
        )
        .compact()
        .join(' ')
        .value();
const countryCellRenderer = ({ value }) => `
        <img width="15" height="10" style="margin-bottom: 2px" src="https://flags.fmcdn.net/data/flags/mini/${COUNTRY_CODES[value]}.png" /> ${ value }
    `;
const percentCellRenderer = ({ value }) => {
    const eDivPercentBar = document.createElement('div');
    eDivPercentBar.className = 'div-percent-bar';
    eDivPercentBar.style.width = `${value}%`;
    if (value < 20) {
        eDivPercentBar.style.backgroundColor = colors['danger'];
    } else if (value < 60) {
        eDivPercentBar.style.backgroundColor = colors['warning'];
    } else {
        eDivPercentBar.style.backgroundColor = colors['success'];
    }

    const eValue = document.createElement('div');
    eValue.className = 'div-percent-value';
    eValue.innerHTML = `${value}%`;

    const eOuterDiv = document.createElement('div');
    eOuterDiv.className = 'div-outer-div';
    eOuterDiv.appendChild(eDivPercentBar);
    eOuterDiv.appendChild(eValue);

    return eOuterDiv;
}

/*
    Custom Filters
*/
class SkillFilter {
    init({ filterChangedCallback }) {
        this.filterChangedCallback = filterChangedCallback;

        // Initial State
        this.model = {
            android: false,
            css: false,
            html5: false,
            mac: false,
            windows: false
        }
    }
    getModel() { }
    setModel() { }
    getGui() {
        const eGui = document.createElement("div");

        const eInstructions = document.createElement("div");
        eInstructions.className = "h6 dropdown-header";
        eInstructions.innerText = "Custom Skills Filter";
        eGui.appendChild(eInstructions);

        const createCheckMarkElement = () => {
            var eCheckMark = document.createElement('i');
            eCheckMark.className = "fa fa-check fa-fw ml-auto text-success";

            return eCheckMark;
        }

        IT_SKILLS.forEach((skill, index) => {
            const skillName = IT_SKILLS_NAMES[index];

            const eFilter = document.createElement("a");
            eFilter.className = "dropdown-item d-flex align-items-center"
            //eFilter.classList.toggle("active", this.model[skill]);
            eFilter.href="javascript:;";

            const eImg = document.createElement("img");
            eImg.src = '//www.ag-grid.com/images/skills/' + skill + '.png';
            eImg.height = 20;
            eImg.className = "mr-2";

            const eName = document.createElement('span');
            eName.innerText = skillName;

            eFilter.appendChild(eImg);
            eFilter.appendChild(eName);
            if (this.model[skill]) {
                eFilter.appendChild(
                    createCheckMarkElement()
                );
            }
            eGui.appendChild(eFilter);

            eFilter.addEventListener("click", (e) => {
                const element = e.currentTarget;
                this.model[skill] = !this.model[skill];
                this.filterChangedCallback();

                // Toggle check marks
                if (this.model[skill]) {
                    element.appendChild(
                        createCheckMarkElement()
                    );
                } else {
                    const eCheckMark = element.querySelector('i');

                    if (eCheckMark) { eCheckMark.remove() }
                }

                return false;
            });
        });

        return eGui;
    }
    doesFilterPass({ data }) {
        const rowSkills = data.skills;
        const { model } = this;

        const passed = reduce(
            IT_SKILLS,
            (acc, skill) => acc || (rowSkills[skill] && model[skill]),
            false
        );

        return passed;
    }
    isFilterActive() {
        return (
            this.model.android ||
            this.model.css ||
            this.model.html5 ||
            this.model.mac ||
            this.model.windows
        );
    }
}

class ProficiencyFilter {
    init({ filterChangedCallback, valueGetter }) {
        this.filterChangedCallback = filterChangedCallback;
        this.valueGetter = valueGetter;

        this.selected = PROFICIENCY_NONE;
    }
    getModel() { }
    setModel() { }
    getGui() {
        const eGui = document.createElement("div");

        const eInstructions = document.createElement("div");
        eInstructions.className = "h6 dropdown-header";
        eInstructions.innerText = "Custom Proficiency Filter";
        eGui.appendChild(eInstructions);

        PROFICIENCY_NAMES.forEach((name, index) => {
            const eFilter = document.createElement("a");
            eFilter.className = "dropdown-item"
            eFilter.classList.toggle("active", PROFICIENCY_VALUES[index] === this.selected);
            eFilter.href="javascript:;";
            eFilter.innerText = name;
            
            eGui.appendChild(eFilter);

            eFilter.addEventListener("click", (e) => {
                const element = e.currentTarget;
                element.parentElement.childNodes.forEach(function(node) {
                    node.classList.toggle('active', false);
                });
                element.classList.toggle("active");

                this.selected = PROFICIENCY_VALUES[index];
                this.filterChangedCallback();

                return false;
            });
        });

        return eGui;
    }
    doesFilterPass(params) {
        const value = this.valueGetter(params);
        const valueAsNumber = parseFloat(value);

        switch (this.selected) {
            case PROFICIENCY_ABOVE40:
                return valueAsNumber >= 40;
            case PROFICIENCY_ABOVE60:
                return valueAsNumber >= 60;
            case PROFICIENCY_ABOVE80:
                return valueAsNumber >= 80;
            default:
                return true;
        }
    }
    isFilterActive() {
        return this.selected !== PROFICIENCY_NONE;
    }
}

export default class AgGridExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rowData: [],
            visibleCount: 0,
            quickFilterValue: ''
        };

        this.gridApi = null;

        this.onGridReady = this.onGridReady.bind(this);
        this.onModelUpdated = this.onModelUpdated.bind(this);
        this.onQuickFilterChange = this.onQuickFilterChange.bind(this);
    }

    componentDidMount() {
        fetch(DATA_URL)
            .then(res => res.json())
            .then(fetchedData => {
                this.setState({ rowData: fetchedData });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.gridApi) {
            if (this.state.quickFilterValue !== prevState.quickFilterValue) {
                this.gridApi.setQuickFilter(this.state.quickFilterValue);
            }
        }
    }

    onModelUpdated() {
        if (this.gridApi) {
            const model = this.gridApi.getModel();
            const visibleCount = model.getRowCount();

            this.setState({ visibleCount });
        }
    }

    onGridReady({ api }) {
        this.gridApi = api;
    }

    onQuickFilterChange(e) {
        this.setState({ quickFilterValue: e.target.value });
    }

    render() {
        const { rowData, visibleCount, quickFilterValue } = this.state;

        return (
            <Container>
                <HeaderMain 
                    title="AgGrid"
                    className="mb-5 mt-4"
                />
                <p className="pb-3">
                    <strong>Over 2,500 Companies use ag-Grid.</strong> The &quot;ag&quot; part of ag-Grid stands for &quot;agnostic&quot;. The internal ag-Grid engine is implemented in TypeScript with zero dependencies. ag-Grid supports Angular through a wrapper component. 
                    The wrapper lets you use ag-Grid in your application like any other Angular component – you pass configuration through property bindings and handle events through event bindings. 
                    You can even use Angular components to customize the grid UI and cell contents / behavior.
                </p>

                <Card>
                    <CardHeader tag="h6" className="d-flex justify-content-between align-items-center bg-white bb-0">
                        <span>AgGrid Example</span>
                        <div className="d-flex align-items-center">
                            <span className="mr-3 text-nowrap small">
                                { visibleCount } / { rowData.length }
                            </span>

                            <InputGroup size="sm">
                                <Input
                                    type="text"
                                    placeholder="Type text to filter..."
                                    value={ quickFilterValue }
                                    onChange={ this.onQuickFilterChange }
                                />
                            </InputGroup>
                        </div>
                    </CardHeader>
                    <div className="ag-theme-bootstrap" style={{ height: '600px' }}>
                        <AgGridReact
                            rowData={ rowData }
                            rowSelection="multiple"
                            onGridReady={ this.onGridReady }
                            onModelUpdated={ this.onModelUpdated }
                            defaultColDef={{
                                sortable: true,
                                resizable: true,
                                filter: true,
                            }}
                        >
                            <AgGridColumn
                                headerName=""
                                width={ 70 }
                                checkboxSelection
                                suppressMenu
                            />

                            <AgGridColumn headerName="Employee">
                                <AgGridColumn
                                    headerName="Name"
                                    field="name"
                                    width={ 150 }
                                    cellRenderer={ nameRenderer }
                                />
                                <AgGridColumn
                                    headerName="Country"
                                    field="country"
                                    width={ 150 }
                                    cellRenderer={ countryCellRenderer }
                                    filterParams={{
                                        cellRenderer: countryCellRenderer,
                                        cellHeight: 20
                                    }}
                                />
                            </AgGridColumn>

                            <AgGridColumn headerName="IT Skills">
                                <AgGridColumn
                                    headerName="Skills"
                                    width={ 125 }
                                    sortable={ false }
                                    cellRenderer={ skillsCellRenderer }
                                    filter={ SkillFilter }
                                />
                                <AgGridColumn
                                    headerName="Proficiency"
                                    field="proficiency"
                                    width={ 150 }
                                    cellRenderer={ percentCellRenderer }
                                    filter={ ProficiencyFilter }
                                />
                            </AgGridColumn>

                            <AgGridColumn headerName="Contact">
                                <AgGridColumn
                                    headerName="Mobile"
                                    field="mobile"
                                    width={ 180 }
                                    filter="agTextColumnFilter"
                                />
                                <AgGridColumn
                                    headerName="Land-line"
                                    field="landline"
                                    width={ 180 }
                                    filter="agTextColumnFilter"
                                />
                                <AgGridColumn
                                    headerName="Address"
                                    field="address"
                                    width={ 180 }
                                    filter="agTextColumnFilter"
                                />
                            </AgGridColumn>
                        </AgGridReact>
                    </div>
                    <CardFooter className="bg-white text-center">
                        More examples of this table can be found <a href="https://www.ag-grid.com" target="_blank" rel="noopener noreferrer">Here</a>
                    </CardFooter>
                </Card>
            </Container>
        );
    }
}
