/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import { Classes, Switch } from "@blueprintjs/core";
import { BaseExample, handleBooleanChange, handleStringChange } from "@blueprintjs/docs-theme";
import * as React from "react";

import { DateRangeInput } from "@blueprintjs/datetime";
import { FORMATS, FormatSelect } from "./common/formatSelect";

export interface IDateRangeInputExampleState {
    allowSingleDayRange?: boolean;
    closeOnSelection?: boolean;
    contiguousCalendarMonths?: boolean;
    disabled?: boolean;
    formatKey: string;
    reverseMonthAndYearMenus?: boolean;
    selectAllOnFocus?: boolean;
}

export class DateRangeInputExample extends BaseExample<IDateRangeInputExampleState> {
    public state: IDateRangeInputExampleState = {
        allowSingleDayRange: false,
        closeOnSelection: false,
        contiguousCalendarMonths: true,
        disabled: false,
        formatKey: Object.keys(FORMATS)[0],
        reverseMonthAndYearMenus: false,
        selectAllOnFocus: false,
    };

    private toggleContiguous = handleBooleanChange(contiguous => {
        this.setState({ contiguousCalendarMonths: contiguous });
    });
    private toggleDisabled = handleBooleanChange(disabled => this.setState({ disabled }));
    private toggleFormatKey = handleStringChange(formatKey => this.setState({ formatKey }));
    private toggleReverseMonthAndYearMenus = handleBooleanChange(reverseMonthAndYearMenus =>
        this.setState({ reverseMonthAndYearMenus }),
    );
    private toggleSelection = handleBooleanChange(closeOnSelection => this.setState({ closeOnSelection }));
    private toggleSelectAllOnFocus = handleBooleanChange(selectAllOnFocus => this.setState({ selectAllOnFocus }));
    private toggleSingleDay = handleBooleanChange(allowSingleDayRange => this.setState({ allowSingleDayRange }));

    protected renderExample() {
        const { formatKey, ...spreadableState } = this.state;
        return <DateRangeInput format={FORMATS[formatKey]} {...spreadableState} />;
    }

    protected renderOptions() {
        return [
            [<FormatSelect key="Format" onChange={this.toggleFormatKey} selectedValue={this.state.formatKey} />],
            [
                <label className={Classes.LABEL} key="modifierslabel">
                    Modifiers
                </label>,
                <Switch
                    checked={this.state.allowSingleDayRange}
                    label="Allow single day range"
                    key="Allow single day range"
                    onChange={this.toggleSingleDay}
                />,
                <Switch
                    checked={this.state.closeOnSelection}
                    label="Close on selection"
                    key="Selection"
                    onChange={this.toggleSelection}
                />,
                <Switch
                    checked={this.state.contiguousCalendarMonths}
                    label="Constrain calendar to contiguous months"
                    key="Constraint calendar to contiguous months"
                    onChange={this.toggleContiguous}
                />,
                <Switch checked={this.state.disabled} label="Disabled" key="Disabled" onChange={this.toggleDisabled} />,
                <Switch
                    checked={this.state.selectAllOnFocus}
                    label="Select all on focus"
                    key="Select all on focus"
                    onChange={this.toggleSelectAllOnFocus}
                />,
                <Switch
                    checked={this.state.reverseMonthAndYearMenus}
                    label="Reverse month and year menus"
                    key="Reverse month and year menus"
                    onChange={this.toggleReverseMonthAndYearMenus}
                />,
            ],
        ];
    }
}
