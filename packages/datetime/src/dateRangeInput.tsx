/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

import * as classNames from "classnames";
import * as React from "react";

import {
    AbstractComponent,
    Button,
    Classes,
    IInputGroupProps,
    InputGroup,
    Intent,
    IProps,
} from "@blueprintjs/core";

import * as DateClasses from "./common/classes";
import {
    IDatePickerBaseProps,
} from "./datePickerCore";

export interface IDateRangeInputProps extends IDatePickerBaseProps, IProps {
    startInputProps?: IInputGroupProps;
    endInputProps?: IInputGroupProps;
}

export class DateRangeInput extends AbstractComponent<IDateRangeInputProps, {}> {
    public static defaultProps: IDateRangeInputProps = {};

    public displayName = "Blueprint.DateRangeInput";

    private startDateInputRef: HTMLInputElement = null;
    private endDateInputRef: HTMLInputElement = null;

    public render() {
        return (
            <div className={Classes.CONTROL_GROUP}>
                <InputGroup
                    className={DateClasses.DATERANGEINPUT_FIELD}
                    inputRef={this.setStartDateInputRef}
                    placeholder="Start date"
                    type="text"
                    {...this.props.startInputProps}
                />
                <InputGroup
                    className={DateClasses.DATERANGEINPUT_FIELD}
                    inputRef={this.setEndDateInputRef}
                    placeholder="End date"
                    type="text"
                    {...this.props.endInputProps}
                />
                <div className={classNames(DateClasses.DATERANGEINPUT_ICON_WRAPPER, Classes.INPUT_GROUP)}>
                    <div className={Classes.INPUT}>
                        <Button
                            className={classNames(Classes.MINIMAL, Classes.iconClass("calendar"))}
                            intent={Intent.PRIMARY}
                        />
                    </div>
                </div>
            </div>
        );
    }

    private setStartDateInputRef = (el: HTMLInputElement) => {
        this.startDateInputRef = el;
    }

    private setEndDateInputRef = (el: HTMLInputElement) => {
        this.endDateInputRef = el;
    }
}
