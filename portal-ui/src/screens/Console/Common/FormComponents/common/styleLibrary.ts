// This file is part of MinIO Console Server
// Copyright (c) 2020 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// This object contains variables that will be used across form components.

export const fieldBasic = {
  inputLabel: {
    fontWeight: 500,
    marginRight: 10,
    width: 100,
    fontSize: 14,
    color: "#393939",
    textAlign: "right" as const,
    display: "flex",
    textOverflow: "ellipsis",
    overflow: "hidden",
    justifyContent: "flex-end",
    "& span": {
      display: "flex",
      alignItems: "center",
    },
  },
  fieldContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },
  tooltipContainer: {
    marginLeft: 5,
    display: "flex",
    alignItems: "center",
  },
};

export const modalBasic = {
  formScrollable: {
    maxHeight: "calc(100vh - 300px)" as const,
    overflowY: "auto" as const,
    marginBottom: 25,
  },
  formSlider: {
    marginLeft: 0,
  },
};

export const tooltipHelper = {
  tooltip: {
    fontSize: 18,
  },
};

const checkBoxBasic = {
  width: 16,
  height: 16,
  borderRadius: 3,
};

export const checkboxIcons = {
  unCheckedIcon: { ...checkBoxBasic, border: "1px solid #d0d0d0" },
  checkedIcon: {
    ...checkBoxBasic,
    border: "1px solid #201763",
    backgroundColor: "#201763",
  },
};
