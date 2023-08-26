import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

const AddProduct = (props) => {
    const history = useNavigate();
    const [data, setData] = React.useState("");

    const {
        register,
        handleSubmit,
        watch,
        getValues,
        formState: { errors },
    } = useForm();

    const ProductTitle = {
        required: true,
    };
    const ProductPrice = {
        required: true,
    };
    const ProductDescription = {
        required: true,
    };
    const ProductCategory = {
        required: true,
    };

    const onSubmit = async (data) => {
        console.log(data, "data")
        var requestBody = {
            title: data, ProductTitle,
            price: data.ProductPrice,
            description: data.ProductDescription,
            image: 'https://i.pravatar.cc',
            category: data.ProductCategory,

        };
        console.log(requestBody);
        axios
            .post(
                `https://fakestoreapi.com/products`, {
                requestBody,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'JWT fefege...'
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    history("/product_list");
                    console.log(response)
                }

            })


    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div
                className={
                    "bg-gradient-to-tl from-green-400 to-indigo-900 h-screen flex flex-row"
                }
            >

                <div
                    className={
                        "h-full flex justify-center items-center lg:w-3/4 w-full p-2 my-2 ml-44"
                    }
                >
                    <div
                        className={
                            "py-4 h-96 bg-white rounded-2xl lg:w-7/12 flex flex-col items-center space-y-3  w-full"
                        }
                    >
                        <p className={"text-center text-2xl font-bold mb-2"}>
                            Add Product
                        </p>

                        <div className={"w-9/12 flex flex-col justify-center"}>
                            <p className={"font-semibold"}>Product Title</p>
                            <input
                                id="ProductTitle"
                                {...register("ProductTitle", ProductTitle)}
                                className={"w-full bg-gray-200 h-6 rounded-xl px-3 text-xs"}
                                placeholder={"ProductTitle"}
                            />{" "}
                            {errors.ProductTilte?.type === "required" && (
                                <p className={"text-red-700 text-xs  "}>
                                    Product Title is Required
                                </p>
                            )}
                        </div>

                        <div className={"w-9/12 flex flex-col justify-center"}>
                            <p className={"font-semibold"}>Product Price</p>
                            <input
                                id="ProductPrice"
                                {...register("ProductPrice", ProductPrice)}
                                className={"w-full bg-gray-200 h-6 rounded-xl px-3 text-xs"}
                                placeholder={"ProductPrice"}
                            />{" "}
                            {errors.ProductPrice?.type === "required" && (
                                <p className={"text-red-700 text-xs  "}>
                                    Product Price is required
                                </p>
                            )}
                        </div>

                        <div className={"w-9/12 flex flex-col justify-center"}>
                            <p className={"font-semibold"}>Product Description</p>
                            <input
                                id={"ProductDescription"}
                                className={"w-full bg-gray-200 h-6 rounded-xl px-3 text-xs"}
                                placeholder={"ProductDescription"}
                                {...register("ProductDescription", ProductDescription)}
                            />
                            {errors.ProductDescription?.type === "required" && (
                                <p className={"text-red-700 text-xs"}>Product Description is required</p>
                            )}

                        </div>
                        <div className={"w-9/12 flex flex-col justify-center"}>
                            <p className={"font-semibold"}>Product Category</p>
                            <input
                                className={"w-full bg-gray-200 h-6 rounded-xl px-3 text-xs"}
                                placeholder={"XYZ College"}
                                id="ProductCategory"
                                {...register("ProductCategory", ProductCategory)}
                            />{" "}
                            {errors.ProductCategory?.type === "required" && (
                                <p className={"text-red-700 text-xs"}>Product Category is required</p>
                            )}

                        </div>

                        <button
                            className={
                                "w-9/12 h-10 bg-[#00838f] font-semibold text-white text-lg rounded-3xl py-[0.15rem]"
                            }
                            onClick={handleSubmit}

                        >
                            Submit
                        </button>

                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddProduct;
