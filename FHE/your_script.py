import numpy as np
import seal_evallib as evallib

# Define parameters for the encryption scheme
params = evallib.SEALParams()
params.set_poly_modulus("1x^16384 + 1")
params.set_coeff_modulus(evallib.CoeffModulus.BFVDefault(16384))
params.set_plain_modulus(1 << 8)

# Create the encryptor, decryptor, and evaluator
encryptor = evallib.Encryptor(params)
decryptor = evallib.Decryptor(params)
evaluator = evallib.Evaluator(params)

# Generate the keys
public_key, secret_key = evallib.KeyGenerator(params).generate()

# Encrypt some data
x = np.array([1, 2, 3, 4, 5], dtype=np.uint8)
encrypted_x = encryptor.encrypt(x)

# Compute on the encrypted data
encrypted_sum = evaluator.add(encrypted_x, encrypted_x)
encrypted_product = evaluator.multiply(encrypted_x, encrypted_x)

# Use bootstrapping to refresh the ciphertexts
encrypted_sum = evaluator.relinearize(encrypted_sum)
encrypted_sum = evaluator.mod_switch_to_next(encrypted_sum)
encrypted_sum = evaluator.mod_switch_to_next(encrypted_sum)
encrypted_product = evaluator.relinearize(encrypted_product)
encrypted_product = evaluator.mod_switch_to_next(encrypted_product)
encrypted_product = evaluator.mod_switch_to_next(encrypted_product)

# Decrypt the results
decrypted_sum = decryptor.decrypt(encrypted_sum)
decrypted_product = decryptor.decrypt(encrypted_product)

# Print the results
print("Original data: ", x)
print("Encrypted data: ", encrypted_x.to_string())
print("Encrypted sum: ", encrypted_sum.to_string())
print("Encrypted product: ", encrypted_product.to_string())
print("Decrypted sum: ", decrypted_sum)
print("Decrypted product: ", decrypted_product)
