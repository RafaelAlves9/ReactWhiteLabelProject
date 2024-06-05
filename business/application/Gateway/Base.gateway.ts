import { useNavigate } from "react-router-dom";
import React from "react";
import { toastMessage } from "../../../src/utils/toastMessage";
import { instances } from "../../../axios/axios.instances";
import { useDispatch } from "react-redux";

export abstract class Base extends React.Component {
    protected _private = instances.private;
    protected _public = instances.public;
    protected _navigate = useNavigate();
    protected _dispatch = useDispatch();
    protected _toastMessage = toastMessage;

    constructor() {
        super({});
    };
};
