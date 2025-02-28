package adam.dev.ecom_enterprise.types;

import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.HibernateException;
import org.hibernate.usertype.UserType;

import java.io.Serializable;
import java.sql.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ListStringType implements UserType<List<String>> {

    @Override
    public int getSqlType() {
        return Types.ARRAY;
    }

    @Override
    public Class<List<String>> returnedClass() {
        return (Class<List<String>>) (Class<?>) List.class;
    }

    @Override
    public boolean equals(List<String> x, List<String> y) throws HibernateException {
        return x != null && x.equals(y);
    }

    @Override
    public int hashCode(List<String> x) throws HibernateException {
        return x != null ? x.hashCode() : 0;
    }

    @Override
    public List<String> nullSafeGet(ResultSet rs, int position, SharedSessionContractImplementor session, Object owner) throws SQLException {
        Array array = rs.getArray(position);

        if (array != null) {
            String[] result = (String[]) array.getArray();
            return new ArrayList<>(Arrays.asList(result));
        }
        return null;
    }

    @Override
    public void nullSafeSet(PreparedStatement st, List<String> value, int index, SharedSessionContractImplementor session) throws SQLException {
        if (value != null) {
            String[] array = value.toArray(new String[0]);
            Array sqlArray = st.getConnection().createArrayOf("text", array);
            st.setArray(index, sqlArray);
        } else {
            st.setNull(index, Types.ARRAY);
        }
    }

    @Override
    public List<String> deepCopy(List<String> value) throws HibernateException {
        if (value == null) {
            return null;
        }
        return new ArrayList<>(value);
    }

    @Override
    public boolean isMutable() {
        return true;
    }

    @Override
    public Serializable disassemble(List<String> value) throws HibernateException {
        return (Serializable) value;
    }

    @Override
    public List<String> assemble(Serializable serializable, Object o) throws HibernateException {
        if (serializable != null) {
            return (List<String>) serializable;
        }

        return new ArrayList<>();
    }

}
