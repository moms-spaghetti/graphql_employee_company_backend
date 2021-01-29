const { default: axios } = require("axios");
const { config } = require("../config");
const companies = require("../models/company");
const employees = require("../models/employee");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLList,
  GraphQLID,
} = require("graphql");

const EmployeeType = new GraphQLObjectType({
  name: "Employee",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    companyId: { type: GraphQLString },
    company: {
      type: CompanyType,
      resolve(parent) {
        return companies.findById(parent.companyId);
      },
    },
  }),
});

const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    totalEmployees: { type: GraphQLInt },
    employees: {
      type: new GraphQLList(EmployeeType),
      resolve(parent) {
        return employees.find({ companyId: parent.id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    allEmployees: {
      type: new GraphQLList(EmployeeType),
      resolve() {
        return employees.find({});
      },
    },
    allCompanies: {
      type: new GraphQLList(CompanyType),
      resolve() {
        return companies.find({});
      },
    },
    employee: {
      type: EmployeeType,
      args: { id: { type: GraphQLString } },
      resolve(parent, { id }) {
        return employees.findById(id);
      },
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString } },
      resolve(parent, { id }) {
        return companies.findById(id);
      },
    },
  }),
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addEmployee: {
      type: EmployeeType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        companyId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const newEmployee = new employees({
          ...args,
          name: args.name.toLowerCase(),
        });
        return newEmployee.save();
      },
    },
    deleteEmployee: {
      type: EmployeeType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, { id }) {
        return employees.deleteOne({ _id: id });
      },
    },
    editEmployee: {
      type: EmployeeType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        companyId: { type: GraphQLString },
      },
      resolve(parent, args) {
        return employees.findByIdAndUpdate(
          args.id,
          { ...args, name: args.name.toLowerCase() },
          { new: true }
        );
      },
    },
    addCompany: {
      type: CompanyType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        totalEmployees: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        const newCompany = new companies({
          ...args,
          name: args.name.toLowerCase(),
        });
        return newCompany.save();
      },
    },
    deleteCompany: {
      type: CompanyType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, { id }) {
        return companies.deleteOne({ _id: id });
      },
    },
    editCompany: {
      type: CompanyType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        totalEmployees: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return companies.findByIdAndUpdate(
          args.id,
          { ...args, name: args.name.toLowerCase() },
          { new: true }
        );
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
